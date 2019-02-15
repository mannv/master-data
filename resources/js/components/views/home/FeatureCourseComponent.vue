<template>
    <main role="main">

        <div class="album py-5 bg-light">
            <div class="container">

                <div class="row">

                    <view-home-feature-course-item
                            v-for="item in listCourse"
                            :key="item.id"
                            :item="item"
                    ></view-home-feature-course-item>

                </div>
            </div>
        </div>

    </main>
</template>

<script>
    export default {
        data () {
            return {
                listCourse: []
            }
        },
        created() {
            console.log('View Home List Course loaded.');
            this.loadFeatureCourse();
        },
        methods: {
            loadFeatureCourse: function () {
                let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImIzN2QzMjQ2NzJlZTcxZDgyNjAxMzNjOGUwOWNlMDM1MGMyMGQ4YzBhNTU2OTVhNzQyYzY3MjFlNmEzZDU3ZmUxZDkzN2ZhOThhZmExYTU4In0.eyJhdWQiOiIyIiwianRpIjoiYjM3ZDMyNDY3MmVlNzFkODI2MDEzM2M4ZTA5Y2UwMzUwYzIwZDhjMGE1NTY5NWE3NDJjNjcyMWU2YTNkNTdmZTFkOTM3ZmE5OGFmYTFhNTgiLCJpYXQiOjE1NTAyNTk0MzgsIm5iZiI6MTU1MDI1OTQzOCwiZXhwIjoxNTUyNjc4NjM4LCJzdWIiOiIxNiIsInNjb3BlcyI6W119.SrdpW2M148o7QVaufUIl-ZHnuWQAtyeF38zn5TyWiNTCmOQH9q0r7iiaF2J35EUVuXsIplN6cIMUOtIQgwm9kGPRaf982KaVIt0ki8XO3j2N1IefBygAQXV41lSEf1UBLK78uD39qZEYtKPWfi66jRbsXfVdFY45IJelNH_8OEzfl-urQnjHwwr3uuUvtNHEbiGxs6sAXKEY7f1fXNoCviKpKU4ls0sTdJYApg3ugF3mASLkAWk_2xbGh-Wxw4MeHkBLM0ggHD-wLYvd0SdZILcfGdszzPIgUFNy1vSSUqHga-ZRwkhOT8B5Nx1EJaOZHHGOfwnGuikPnNC_HsDI3AQrjQ0-952U0YkExD0cZvx4sKwYwW0fdiWrjPD9Q1Vt-9BEHERxkCGCtBrZMICDfO1vEEkFMQnxs8hl2zS9n7k3CRH6rSxes2t9FZk360OCUJ0OujqrN4huMD2abz1i-dZbgPw38iMPx8eq1kM-_OW0p1FABLpeW-RGoQlVTVHt0ZBFjSUAfgni5kDsywt587X4_eluiJbUwqYcgYr5PpRg6ypl7BzMmoCNT3AOIoT4YqjsNSkrsS-12Q0xXHPdUjItQrLZle93aAwCLFhuh_B0CLCeK7ladpEkSXQhXMJrL8aQBPsjZuUbLXBw97FAhO9v68mjrR3PUDWrIR-VKWE";
                let config = {
                    headers: {"Authorization": "Bearer " + token}
                };
                console.log(config);
                axios.get('http://master-data.local/api/course', config)
                    .then(response => {
                        this.listCourse = response.data.data;
                        console.log(this.listCourse);
                    });
            }
        }
    }
</script>
