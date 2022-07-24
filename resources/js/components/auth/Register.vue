<template>
  <div class="bg-primary">
    <div class="container min-vh-100 pt-5">
      <div class="row">
        <div class="col-md-7 mx-auto">
          <div class="card border-0 shadow rounded-3 my-5">
            <div class="card-body p-4 p-sm-5">
              <h5 class="card-title text-center mb-5 fw-light fs-5">Registrasi</h5>
              <form>
                <div class="form-floating mb-3">
                  <input autocomplete="false" type="text" class="form-control" placeholder="name@example.com">
                  <label for="floatingInput">Nomor Induk Kependudukan (NIK)</label>
                </div>
                <div class="form-floating mb-3">
                  <input autocomplete="false" type="text" class="form-control" placeholder="name@example.com">
                  <label for="floatingInput">Nama Lengkap</label>
                </div>
                <div class="form-floating mb-3">
                  <input autocomplete="false" type="email" class="form-control" placeholder="name@example.com">
                  <label for="floatingInput">Email</label>
                </div>
                <div class="form-floating mb-3">
                  <input autocomplete="false" type="password" class="form-control" placeholder="Password">
                  <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating mb-3">
                  <input autocomplete="false" type="password" class="form-control" placeholder="Password">
                  <label for="floatingPassword">Ulangi Password</label>
                </div>

                <div class="col-md-12">
                  <div class="d-flex justify-content-between">
                    <div class="form-check mb-3">
                      <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck">
                      <label class="form-check-label" for="rememberPasswordCheck">
                        Ingat Password
                      </label>
                    </div>
                    <div class="small">
                      Sudah Punya Akun? <router-link to="/login">Login</router-link>
                    </div>
                  </div>
                </div>
                <div class="d-grid">
                  <router-link to="/dataDiri" class="btn btn-primary btn-login text-uppercase fw-bold">Daftar</router-link>
                </div>
                <hr class="my-4">
                <div class="d-grid mb-2">
                  <button class="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                    <b-icon icon="google"></b-icon>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
