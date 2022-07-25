<template>
  <div>
    <b-form @submit.stop.prevent="onSubmit" class="col-md-12">
      <b-form-group class="mb-2" label="Nama Lengkap" label-for="example-input-1">
        <b-form-input
          id="example-input-1"
          name="example-input-1"
          v-model="$v.form.name.$model"
          :state="validateState('name')"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback
          id="input-1-live-feedback"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group class="mb-2" label="Alamat Email" label-for="example-input-1">
        <b-form-input
          id="example-input-1"
          name="example-input-1"
          type="email"
          v-model="$v.form.email.$model"
          :state="validateState('email')"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback
          id="input-1-live-feedback"
        >This is a required field and must be an email format</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group class="mb-2" label="Gelar Awal" label-for="example-input-1">
        <b-form-input
          id="example-input-1"
          name="example-input-1"
          v-model="$v.form.gelarAwal.$model"
          :state="validateState('gelarAwal')"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>

        <!-- <b-form-invalid-feedback
          id="input-1-live-feedback"
        >This is a required field</b-form-invalid-feedback> -->
      </b-form-group>

      <b-form-group class="mb-2" label="Gelar Akhir" label-for="example-input-1">
        <b-form-input
          id="example-input-1"
          name="example-input-1"
          v-model="$v.form.gelarAkhir.$model"
          :state="validateState('gelarAkhir')"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback
          id="input-1-live-feedback"
        >This is a required field</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group class="mb-2" label="Nomor KTP" label-for="example-input-1">
        <b-form-input
          id="example-input-1"
          name="example-input-1"
          v-model="$v.form.nomorKTP.$model"
          :state="validateState('nomorKTP')"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback
          id="input-1-live-feedback"
        >This is a required field and must be 12 characters</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group class="mb-2" label="Nomor NPWP" label-for="example-input-1">
        <b-form-input
          id="example-input-1"
          name="example-input-1"
          v-model="$v.form.nomorNPWP.$model"
          :state="validateState('nomorNPWP')"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>

        <!-- <b-form-invalid-feedback
          id="input-1-live-feedback"
        >This is a required field and must be 12 characters</b-form-invalid-feedback> -->
      </b-form-group>

        <b-form-group class="mb-2" label="Nomor SIM" label-for="example-input-1">
            <b-form-input
                id="example-input-1"
                name="example-input-1"
                v-model="$v.form.nomorSIM.$model"
                :state="validateState('nomorSIM')"
                aria-describedby="input-1-live-feedback"
            ></b-form-input>

            <!-- <b-form-invalid-feedback
                id="input-1-live-feedback"
            >This is a required field</b-form-invalid-feedback> -->
        </b-form-group>

      <b-form-group class="mb-2" label="Tempat Lahir" label-for="example-input-1">
        <b-form-input
          id="example-input-1"
          name="example-input-1"
          v-model="$v.form.tempatLahir.$model"
          :state="validateState('tempatLahir')"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback
          id="input-1-live-feedback"
        >This is a required field</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group class="mb-2" label="Tanggal Lahir" label-for="example-input-1">
        <b-form-input
          id="example-input-1"
          name="example-input-1"
          type="date"
          v-model="$v.form.tanggalLahir.$model"
          :state="validateState('tanggalLahir')"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback
          id="input-1-live-feedback"
        >This is a required field</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group class="mb-2" label="Golongan Darah" label-for="example-input-1">
        <b-form-input
          id="example-input-1"
          name="example-input-1"
          v-model="$v.form.golonganDarah.$model"
          :state="validateState('golonganDarah')"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback
          id="input-1-live-feedback"
        >This is a required field</b-form-invalid-feedback>
      </b-form-group>
        <b-form-group class="mb-2" id="example-input-group-2" label="Status Pernikahan" label-for="example-input-2">
            <b-form-select
                id="example-input-2"
                class="form-select"
                name="example-input-2"
                v-model="$v.form.marital.$model"
                :options="marital"
                :state="validateState('marital')"
                aria-describedby="input-2-live-feedback"
            ></b-form-select>

            <b-form-invalid-feedback id="input-2-live-feedback">This is a required field.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group class="mb-2" label="Alamat" label-for="example-input-1">
            <b-form-textarea
                id="example-input-1"
                name="example-input-1"
                v-model="$v.form.alamat.$model"
                :state="validateState('alamat')"
                aria-describedby="input-1-live-feedback"
            ></b-form-textarea>

            <b-form-invalid-feedback
                id="input-1-live-feedback"
            >This is a required field</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group class="mb-2" label="Nomor HP" label-for="example-input-1">
            <b-form-input
                id="example-input-1"
                name="example-input-1"
                v-model="$v.form.nomorHP.$model"
                :state="validateState('nomorHP')"
                aria-describedby="input-1-live-feedback"
            ></b-form-input>

            <b-form-invalid-feedback
                id="input-1-live-feedback"
            >This is a required field</b-form-invalid-feedback>
        </b-form-group>


      <b-form-group class="mb-2" id="example-input-group-2" label="Etnis" label-for="example-input-2">
        <b-form-select
          id="example-input-2"
          class="form-select"
          name="example-input-2"
          v-model="$v.form.etnicity.$model"
          :options="etnicity"
          :state="validateState('etnicity')"
          aria-describedby="input-2-live-feedback"
        ></b-form-select>

        <!-- <b-form-invalid-feedback id="input-2-live-feedback">This is a required field.</b-form-invalid-feedback> -->
      </b-form-group>


      <b-form-group class="mb-2" id="example-input-group-2" label="Agama" label-for="example-input-2">
        <b-form-select
          id="example-input-2"
          class="form-select"
          name="example-input-2"
          v-model="$v.form.religion.$model"
          :options="religion"
          :state="validateState('religion')"
          aria-describedby="input-2-live-feedback"
        ></b-form-select>

        <b-form-invalid-feedback id="input-2-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>

      <b-button type="submit" variant="primary" :disabled="disabled">Submit</b-button>
      <b-button class="ml-2" @click="resetForm()">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default {
    mixins: [validationMixin],
    props: ["store"],
    data() {
        return {
            disabled: false,
            etnicity: [
                {
                    value: null,
                    text: 'Pilih..',
                    disabled: true
                }
            ],
            religion: [
                {
                    value: null,
                    text: 'Pilih..',
                    disabled: true
                }
            ],
            marital: [
                {
                    value: null,
                    text: 'Pilih..',
                    disabled: true
                }
            ],
            form: {
                name: null,
                email: null,
                etnicity: null,
                marital: null,
                religion: null,
                gelarAwal: null,
                gelarAkhir: null,
                nomorKTP: null,
                nomorNPWP: null,
                nomorSIM: null,
                tempatLahir: null,
                tanggalLahir: null,
                golonganDarah: null,
                alamat: null,
                nomorHP: null,
            },



        };
    },
    validations: {
        form: {
            etnicity: {

            },
            marital: {
                required
            },
            religion: {
                required
            },
            name: {
                required,
                minLength: minLength(3)
            },
            email: {
                required,
            },
            gelarAwal: {

            },
            gelarAkhir: {

            },
            nomorKTP: {
                required,
                minLength: minLength(16),
                maxLength: maxLength(16)
            },
            nomorNPWP: {
                minLength: minLength(16)
            },
            nomorSIM: {
                minLength: minLength(12)
            },
            tempatLahir: {
                required
            },
            tanggalLahir: {
                required
            },
            golonganDarah: {

            },
            alamat: {
                required
            },
            nomorHP: {
                required
            }
        }
    },
    mounted : function() {
        console.log('mounted')
        this.getEtnicities()
        this.getMaritals()
        this.getReligions()
    },
    methods: {
        getEtnicities(){
            axios.get('/api/status/getByType/ETH')
                .then((response)=> {
                    response.data.forEach(element => {
                        this.etnicity.push({
                            'value': element.status_id,
                            'text': element.name,
                        })
                    });
                })
        },
        getMaritals(){
            axios.get('/api/status/getByType/MAR')
                .then((response)=> {
                    response.data.forEach(element => {
                        this.marital.push({
                            'value': element.status_id,
                            'text': element.name,
                        })
                    });
                })
        },
        getReligions(){
            axios.get('/api/status/getByType/REL')
                .then((response)=> {
                    response.data.forEach(element => {
                        this.religion.push({
                            'value': element.status_id,
                            'text': element.name,
                        })
                    });
                })
        },
        validateState(name) {
            const { $dirty, $error } = this.$v.form[name];
            return $dirty ? !$error : null;
        },
        resetForm() {
            this.form = {
                name: null,
                email: null,
                etnicity: null,
                marital: null,
                religion: null,
                gelarAwal: null,
                gelarAkhir: null,
                nomorKTP: null,
                nomorNPWP: null,
                nomorSIM: null,
                tempatLahir: null,
                tanggalLahir: null,
                golonganDarah: null,
                alamat: null,
                nomorHP: null,
            };

            this.$nextTick(() => {
                this.$v.$reset();
            });
        },
        onSubmit() {
            this.$v.form.$touch();
            if (this.$v.form.$anyError) {
                return;
            }

            this.disabled = true;

            axios.post('/api/person', {
                'title_pre'         : this.form.gelarAwal,
                'name'              : this.form.name,
                'title_post'        : this.form.gelarAkhir,
                'identity_id'       : this.form.nomorKTP,
                'tax_id'            : this.form.nomorNPWP,
                'driving_a'         : this.form.nomorSIM,
                'driving_b'         : this.form.nomorSIM,
                'driving_c'         : this.form.nomorSIM,
                'birth_place'       : this.form.tempatLahir,
                'birth_date'        : this.form.tanggalLahir,
                'religion_id'       : this.form.religion,
                'blood_type'        : this.form.golonganDarah,
                'marital_status_id' : this.form.marital,
                'ethnicity_id'      : this.form.etnicity,
                'email'             : this.form.email,
                'mobile'            : this.form.nomorHP,
                'mobile_alt'        : this.form.nomorHP,
                'address'           : this.form.alamat,
                'region_id'         : null,
                'zip'               : null,
                'address_home'      : null,
                'region_id_home'    : null,
                'zip_home'          : null,
            })
            .then((response)=> {
                this.$swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })

                this.disabled = true;
                this.resetForm();
            })

        }
    },
}
</script>

<style>
</style>
