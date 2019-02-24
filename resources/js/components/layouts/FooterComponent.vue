<template>
    <footer class="text-muted bg-white mt-4">
        <div class="container">
            <p class="float-right">
                <a href="#">Lên đầu trang</a>
            </p>
            <p>Dự án thử nghiệm <strong>VueJS</strong> với <strong class="text-danger">Laravel</strong> 5.7.26</p>
            <p>
                Thông tin tác giả<br />
                <strong>Nguyễn Văn Mận</strong><br />
                email: anhmantk@gmail.com<br/>
                skype: anhmantk
            </p>
        </div>
    </footer>
</template>

<script>
    export default {
        created() {
            console.log('Layout Footer loaded.');
        }
    }
</script>
