<template>
    <div class="login-page">

        <div v-if="!registerActive">
            <h1>Sign In</h1>
            <input class="textbox" v-model="unameLogin" placeholder="User Name" required>
            <input class="textbox" v-model="pwdLogin" type="password" placeholder="Password" required>
            <button class="btn-in" @click="doLogin">Sign In</button>
            <p>Don't have an account? <a href="#" @click="doShift()">Sign up here</a> </p>
        </div>

        <div v-if="registerActive">
            <h1>Sign Up</h1>
            <input class="textbox" v-model="unameReg" placeholder="User Name" required>
            <input class="textbox" v-model="emailReg" type="email" placeholder="Email" required>
            <input class="textbox" v-model="pwdReg" type="password" placeholder="Password" required>
            <input class="textbox" v-model="confirmReg" type="password" placeholder="Confirm Password" required>
            <button class="btn-up" @click="doRegister">Sign Up</button>
            <p>Already have an account? <a href="#" @click="doShift()">Sign in here</a> </p>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { loginOK, loginUser, postLogin, postRegister } from './share/share'

export default defineComponent({
    name: 'SignPage',
    setup() {

        let registerActive = ref(false)

        let unameLogin = ref("")
        let pwdLogin = ref("")

        let unameReg = ref("")
        let emailReg = ref("")
        let pwdReg = ref("")
        let confirmReg = ref("")

        const doLogin = async () => {

            const ok = await postLogin(unameLogin.value, pwdLogin.value)
            if (ok) {
                // alert('login successfully')
                loginOK.value = true
                loginUser.value = unameLogin.value
            }
        }

        const doRegister = async () => {

            if (pwdReg.value != confirmReg.value) {
                alert('password confirmation error')
                return
            }

            const ok = await postRegister(unameReg.value, emailReg.value, pwdReg.value)
            if (ok) {
                // alert('register successful')
                doShift()
            }
        }

        const doShift = () => {
            registerActive.value = !registerActive.value
        }

        return {
            registerActive,

            unameLogin,
            pwdLogin,

            unameReg,
            emailReg,
            pwdReg,
            confirmReg,

            loginOK,

            doLogin,
            doRegister,
            doShift,
        }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    margin-bottom: 3%;
}

.login-page {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.textbox {
    margin-bottom: 2%;
    width: 100%;
}

.btn-in {
    float: right;
    margin-right: -2%;
}

.btn-up {
    float: right;
    margin-right: -1%;
}
</style>
