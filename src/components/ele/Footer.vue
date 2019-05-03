<template>
  <div>
      <div class="footer">
        <b-row>
        <b-col>
          <div><a href="https://ph.utexas.edu/"><img src="../../assets/share/ph.png"></a></div>
        </b-col>
        <b-col>
          <p>Director: CK Shih</p>
          <p>Office: RLM 13.220</p>
          <p>Phone: <a href="tel:1-512-471-6603">(512)471-6603</a></p>
          <p>Email: <a href="mailto:shih@physics.utexas.edu">shih@physics.utexas.edu</a></p>
          <p>Website: <a href="https://web2.ph.utexas.edu/~shih/">web2.ph.utexas.edu/~shih/</a></p>
        </b-col>
      </b-row>
      </div>
  </div>
</template>

<script>
export default{

}
</script>

<style scoped lang="scss">
@import '../../styles/_custom.scss';

img {
  margin: 10px;
  height: 50px;
}
.footer{
  background-color: $primary;
  padding: 20px;
  p, a {
    margin: auto;
    color: white;
  }
}
</style>
