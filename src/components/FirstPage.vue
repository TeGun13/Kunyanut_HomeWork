<template>
  <div>
    <div class="Head" style="font-size: 40px">
      <b> <a>My Profile</a> </b>

      <div class="profile" id="Padding">
        <img src="../assets/Gun.jpg" width="45%" />
      </div>
    </div>

    <div class="label">
      <a>Name : Kunyanut Techaphalangrak </a>
    </div>

    <div class="label">
      <a>Age : 21</a>
    </div>

    <div class="label">
      <a>Education : Thai-Nichi Institute of Technology </a>
    </div>

    <div class="label">
      <a>faculty of information technology </a>
    </div>

    <div class="label">
      <a>Major : Information Technology </a>
    </div>

    <div class="label">
      <a>Skills : C, C#, SQL, Java, HTML, Python and Power BI </a>
    </div>
    <div class="label">
      <a> Language : English, Japanese and Chinese </a>
    </div>
  </div>
</template>  

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
};
</script>

<style >
#Padding {
  padding: 20px;
}
</style>