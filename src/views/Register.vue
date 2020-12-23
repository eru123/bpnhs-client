<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex>
                <v-card max-width="600" class="mx-auto pa-4" flat>
                    <v-card-title align-center justify-center>
                        <v-spacer></v-spacer>
                        <h1>Register</h1>
                        <v-spacer></v-spacer>
                    </v-card-title>
                    <v-card-text>
                        <v-form ref="registerForm" v-model="valid" lazy-validation>
                            <v-row>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field 
                                        v-model="fname" 
                                        :rules="[rules.req,rules.minName,rules.maxName]" 
                                        label="Firstname" 
                                        maxlength="36" 
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field 
                                        v-model="mname" 
                                        :rules="[rules.req,rules.minName,rules.maxName]" 
                                        label="Middlename" 
                                        maxlength="36" 
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" >
                                    <v-text-field 
                                        v-model="lname" 
                                        :rules="[rules.req,rules.minName,rules.maxName]" 
                                        label="Lastname" 
                                        maxlength="36" 
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field 
                                        v-model="user"
                                        label="Username" 
                                        :rules="[rules.req, rules.minUser,rules.maxUser]"
                                        hint="Username format [a-bA-Z0-9_]"
                                        required
                                        prepend-icon="mdi-account"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field 
                                        v-model="email"
                                        label="E-mail" 
                                        :rules="[rules.req, rules.email]"
                                        hint="E-mail is valid"
                                        required
                                        prepend-icon="mdi-email"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-select
                                        :items="['male','female']"
                                        label="Gender"
                                        v-model="gender"
                                        hint="Select your gender"
                                        prepend-icon="mdi-gender"
                                    ></v-select>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field 
                                        v-model="pass" 
                                        :append-icon="showP?'mdi-eye':'mdi-eye-off'" 
                                        :rules="[rules.req, rules.minPass,rules.maxPass]" 
                                        :type="showP ? 'text' : 'password'" 
                                        label="Password" 
                                        hint="At least 4 characters" 
                                        counter 
                                        prepend-icon="mdi-lock"
                                        @click:append="showP = !showP"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field 
                                        v-model="cpass" 
                                        :append-icon="showC?'mdi-eye':'mdi-eye-off'" 
                                        :rules="[rules.req,passwordMatch]" 
                                        :type="showC ? 'text' : 'password'" 
                                        label="Confirm Password" 
                                        hint="Password matched" 
                                        prepend-icon="mdi-lock"
                                        @click:append="showC = !showC"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-btn 
                                        :disabled="!valid" 
                                        color="primary" 
                                        depressed 
                                        block 
                                        large 
                                        rounded 
                                        :loading="loading" 
                                        @click="validate"
                                    >Register</v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import {post} from "@/plugins/api";
import db from "@/plugins/db";
import prevent from "@/plugins/prevent";

export default {
    name: "Register",
    data: () => ({
        loading: false,
        pass: "",
        user: "",
        error: false,
        dialog: true,
        valid: false,
        fname: "",
        mname: "",
        lname: "",
        email: "",
        gender: "other",
        password: "",
        cpass: "",
        showP:false,
        showC:false,
        
        rules: {
            req: value => !!value || "Required.",
            email: v => /.+@.+\..+/.test(v) || "Invalid E-mail format",
            minUser: v => (v && v.length >= 3) || "Min 3 characters",
            maxUser: v => (v && v.length <= 36) || "Max 36 characters",
            minName: v => (v && v.length >= 2) || "Min 2 characters",
            maxName: v => (v && v.length <= 36) || "Max 36 characters",
            minPass: v => (v && v.length >= 4) || "Min 4 characters",
            maxPass: v => (v && v.length <= 1024) || "Max 36 characters",
        }
    }),
    created() {
        prevent.auth(this,{name:'Home'});
    },
    methods: {
        async register(){
            console.log("validated");
        },
        async login(){

            if(this.user.length > 0 && this.pass.length > 0){
                this.loading = false;
                this.loading = true;
                post("login",{user:this.user,pass:this.pass})
                    .then(e => {
                        if(e.data.token.length > 0){
                            let token = e.data.token;
                            db.token.set(token);
                            alert("You are now logged in");
                            this.$router.push({name:"Home"})
                        }
                    })
                    .catch(() => {
                        this.error = true;
                        alert("Invalid credentials");
                    })
                    .finally(() => {
                        this.loading = false;
                    })
            } else {
                this.error = true;
                alert("Input both username and password!");
            }
        },
        validate() {
            if (this.$refs.loginForm.validate()) {
                this.register();
            }
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        }
    },
    computed: {
        passwordMatch() {
            return () => this.pass === this.cpass || "Password does not match";
        }
    }
}
</script>