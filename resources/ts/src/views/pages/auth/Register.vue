<template>

    <div class="col-md-12 pt-10">
        <div class="d-flex justify-content-center">
            <div class="card shadow col-md-6">
                <div class="card-body ">
                    <h2 class="card-title text-center mb-10">Register</h2>
                    <div class="mb-5">
                        <label for="emailField" class="form-label">Nama Lengkap</label>
                        <input
                            type="text"
                            name="nama"
                            v-model="nama"
                            class="form-control form-control-solid"
                            id="namaField"
                            placeholder="Nama Lengkap"
                        />
                        <span class="text-danger">{{ namaError }}</span>
                    </div>

                    <div class="mb-5">
                        <label for="emailField" class="form-label">NIK</label>
                        <input
                            type="text"
                            name="nik"
                            v-model="nik"
                            class="form-control form-control-solid"
                            id="nikField"
                            placeholder="Nomor Induk Kependudukan"
                        />
                        <span class="text-danger">{{ namaError }}</span>
                    </div>

                    <div class="mb-5">
                        <label for="emailField" class="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            v-model="email"
                            class="form-control form-control-solid"
                            id="emailField"
                            placeholder="Alamat Email"
                        />
                        <span class="text-danger">{{ emailError }}</span>
                    </div>

                    <div class="mb-5">
                        <label for="passwordField" class="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            v-model="password"
                            class="form-control form-control-solid"
                            id="passwordField"
                            placeholder="password"
                        />
                        <span class="text-danger ">{{ passwordError }}</span>
                    </div>

                    <div class="mb-5">
                        <label for="passwordField" class="form-label">Confirm Password</label>
                        <input
                            type="password"
                            name="password"
                            v-model="password"
                            class="form-control form-control-solid"
                            id="passwordField"
                            placeholder="password"
                        />
                        <span class="text-danger ">{{ passwordError }}</span>
                    </div>

                    <div class="w-100 text-end">Sudah Punya Akun? <router-link to="login">Login</router-link></div>
                    <div class="my-5 text-center">
                        <router-link to="admin" class="btn btn-primary w-100">Login</router-link>
                        <div class="separator my-5"></div>
                        <a href="#" class="btn btn-danger">
                            <i class="bi bi-google me-2"></i> Google
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

import * as yup from "yup";
import { useField, useForm } from "vee-validate";

export default {
    setup() {
        // Define a validation schema
        const schema = yup.object({
        email: yup
            .string()
            .required()
            .email(),
        password: yup
            .string()
            .required()
            .min(8)
        });

        // Create a form context with the validation schema
        useForm({
            validationSchema: schema
        });

        // No need to define rules for fields
        const { value: email, errorMessage: emailError } = useField("email");
        const { value: password, errorMessage: passwordError } = useField(
            "password"
        );

        return {
        email,
        emailError,
        password,
        passwordError
        };
  }
}
</script>
