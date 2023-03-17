<template>
  <MainWidthLayout>
    <section id="about-us">
      <div class="about-us__outer-div">
        <h2>Frösövallen</h2>
        <div class="about-us__inner-div">
          <article class="about-us__info-txt">
            <h3>om oss</h3>
            <p>
              Vivamus orci purus, semper et euismod id, vestibulum ut risus. Morbi diam ante, varius
              eget lorem et, accumsan sodales dolor. Aliquam sollicitudin nibh quis turpis tincidunt
              imperdiet. Donec ut volutpat ipsum. Duis posuere diam ut urna pretium, nec eleifend
              velit.
            </p>
            <p>
              Pellentesque. Vestibulum et sagittis nunc, sed bibendum justo. Etiam posuere dui et
              porta sagittis. Praesent vitae risus ornare, cursus dolor sit amet, aliquet velit.
              Etiam molestie magna interdum lobortis mollis. Maecenas sem elit, hendrerit nec dolor
              sed.
            </p>
          </article>
          <div class="about-us__img-container">
            <img src="/public/frosovallenHouse.png" alt="bild på försvallen" />
          </div>
        </div>
        <!-- shape -->
        <div class="about-us__background-shape"></div>
      </div>
    </section>
  </MainWidthLayout>
</template>

<script setup>
  import MainWidthLayout from '../layouts/MainWidthLayout.vue'
</script>

<style lang="scss">
  #about-us {
    margin: 11rem 0;
  }

  .about-us__outer-div {
    // display: flex;
    position: relative;
    width: 100%;
    height: 68rem;

    h2 {
      color: #c64533;
      font-size: 6.4rem;
      text-transform: uppercase;
    }
  }

  .about-us__background-shape {
    height: 68rem;
    width: 50rem;
    background-color: #7d9a89;
    position: absolute;
    top: 0;
    right: 0;
  }

  .about-us__inner-div {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: calc(100% - 15rem);
    z-index: 1;

    .about-us__info-txt {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h3 {
        color: #505050;
        font-size: 4.8rem;
        text-transform: uppercase;
        margin-bottom: 5rem;
      }

      p {
        width: 44rem;
        font-size: 2.2rem;
        color: #464646;
        margin-bottom: 2rem;
        letter-spacing: 0.22rem;
      }
    }
  }

  .about-us__info-txt {
    // width: 100rem;
  }

  .about-us__img-container > img {
    width: 50rem;
    height: 53rem;
    object-fit: contain;
  }
</style>
about-us__inner-div
