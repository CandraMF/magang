<template>
  <div class="bg-primary">
    <div class="container min-vh-100 pt-5">
      <div class="row">
        <div class="col-md-7 mx-auto">
          <div class="card border-0 shadow rounded-3 my-5">
            <div class="card-body p-4 p-sm-5">
              <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
              <form>
                <div class="form-floating mb-3">
                  <input autocomplete="false" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                  <label for="floatingInput">Email</label>
                </div>
                <div class="form-floating mb-3">
                  <input autocomplete="false" type="password" class="form-control" id="floatingPassword" placeholder="Password">
                  <label for="floatingPassword">Password</label>
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
                      Belum Punya Akun? <router-link to="/register">Buat Akun</router-link>
                    </div>

                  </div>
                </div>
                <div class="d-grid">
                  <router-link to="/dataDiri" class="btn btn-primary btn-login text-uppercase fw-bold">Sign in</router-link>
                </div>
                <hr class="my-4">
                <div class="d-grid mb-2">
                  <button class="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                    <b-icon icon="google"></b-icon> Masuk dengan Google
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
