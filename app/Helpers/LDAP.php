<?php
namespace App\Helpers;

class LDAP
{
    public $conn, $config;

    public function __construct()
    {
        $this->config = [
            'host' => env('LDAP_HOST', 'host'),
            'base_dn' => env('LDAP_BASE_DN', 'dc=domain,dc=com'),
            'account_suffix' => env('LDAP_ACCOUNT_SUFFIX', '@domain.com'),
            'port' => env('LDAP_PORT', xxx)
        ];
    }
    public function auth($uname, $pwd)
    {
        $this->conn = ldap_connect($this->config['host'], $this->config['port']);
        $bindDn = "uid=$uname,ou=people," . $this->config['base_dn'];
        ldap_set_option($this->conn, LDAP_OPT_PROTOCOL_VERSION, 3);
        if (ldap_bind($this->conn, $bindDn, $pwd)) {
            return $this->directoryEntry($uname, $bindDn);
        }
        return false;
    }

    public function directoryEntry($username, $dn)
    {
        $ldap_connection = $this->conn;
        $columns = ['givenname', 'sn', 'mail', 'uid', 'cn'];
        $filter = "(uid=$username)";
        $result = ldap_read($ldap_connection, $dn, $filter, $columns);
        if ($result) {
            $entries = ldap_get_entries($ldap_connection, $result);
            if ($entries['count'] > 0) {
                for ($i = 0; $i < $entries['count']; $i++) {
                    $temp = [];
                    foreach ($columns as $col) {
                        $temp[$col] = array_key_exists($col, $entries[$i]) ? $entries[$i][$col][0] : '';
                    }
                }
            }
        }
        ldap_unbind($ldap_connection);
        return $temp;
    }

}
