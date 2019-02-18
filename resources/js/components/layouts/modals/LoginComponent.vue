<template>
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div v-if="requestPending" class="modal-overlay">
                    <div class="lds-roller"><div></div><div></div><div></div><div></div></div>
                </div>
                <form action="">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Đăng nhập</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div v-if="errors.length > 0" class="alert alert-danger" role="alert">
                            <ul class="mb-0 p-0 list-unstyled">
                                <li v-for="msg in errors">{{msg}}</li>
                            </ul>
                        </div>
                        <div class="form-group">
                            <label for="login_email">Email</label>
                            <input v-model="email" type="text" class="form-control" id="login_email">
                        </div>
                        <div class="form-group">
                            <label for="login_password">Mật khẩu</label>
                            <input v-model="password" type="password" class="form-control" id="login_password">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button @click="loginAction" type="button" class="btn btn-primary">Đăng nhập</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: "",
                password: "",
                errors: [],
                requestPending: false
            }
        },

        created() {
            //
        },

        methods: {
            loginAction: function () {
                this.errors = [];
                this.requestPending = true;
                let formParams = {
                    email: this.email,
                    password: this.password
                };
                API.login(formParams, (response) => {
                    console.log(response);
                    this.requestPending = false;
                }, (errors) => {
                    this.errors = errors;
                    this.requestPending = false;
                });
            }
        }
    }
</script>
