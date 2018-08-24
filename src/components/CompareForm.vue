<template>
  <div class="compare-form">
    <form>
      <div class="container">
        <div class="columns">
          <div class="column col-6">
              <div class="form-group">
                <label class="form-label" for="input-example-1">First Url</label>
                <input class="form-input" id="input-example-1" type="text" placeholder="https://diffurl.com?a=1">
              </div>
          </div>
          <div class="column col-6">
              <div class="form-group">
                <label class="form-label" for="input-example-3">Second Url</label>
                <input class="form-input" id="input-example-3" type="text" placeholder="https://diffurl.com?a=2">
              </div>
          </div>
          <div class="column col-12 mt-2">
            <button type="submit" class="btn btn-primary btn-block">Compare</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CompareForm'
}
</script>

<style scoped>
  label {
    text-transform: uppercase;
    font-size: 12px;
  }
</style>
