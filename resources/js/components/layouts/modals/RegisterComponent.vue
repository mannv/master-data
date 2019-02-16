<template>
    <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form action="">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Đăng ký thành viên</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="register_email">Email</label>
                            <input type="text" class="form-control" id="register_email">
                        </div>
                        <div class="form-group">
                            <label for="register_password">Mật khẩu</label>
                            <input type="text" class="form-control" id="register_password">
                        </div>
                        <div class="form-group">
                            <label for="register_password_2">Xác nhận mật khẩu</label>
                            <input type="text" class="form-control" id="register_password_2">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Đăng ký</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            //
        }
    }
</script>
