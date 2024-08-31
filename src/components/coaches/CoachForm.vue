<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstname.IsValid }">
      <label for="firstname">Firstname:</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="firstname.val"
        @blur="clearValidity('firstname')"
      />
      <p v-if="!firstname.IsValid">Firstname must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastname.IsValid }">
      <label for="lastame">Lastname:</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="lastname.val"
        @blur="clearValidity('firstname')"
      />
      <p v-if="!lastname.IsValid">lastname must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.IsValid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!description.IsValid">Description must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.IsValid }">
      <label for="rate">Hourly Rate:</label>
      <input
        type="number"
        id="rate"
        v-model.number="rate.val"
        @blur="clearValidity('rate')"
      />
      <p v-if="!rate.IsValid">Rate must be a number.</p>
    </div>

    <div class="form-control" :class="{ invalid: !areas.IsValid }">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="career">Career Advisory</label>
      </div>
      <p v-if="!areas.IsValid">At least one expertise must be selected</p>
    </div>
    <p v-if="!formIsValid">Please fix the above arrors and submit again</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstname: {
        val: '',
        IsValid: true,
      },
      lastname: {
        val: '',
        IsValid: true,
      },
      description: {
        val: '',
        IsValid: true,
      },
      rate: {
        val: null,
        IsValid: true,
      },
      areas: {
        val: [],
        IsValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      input.IsValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.firstname.val === '') {
        this.firstname.IsValid = false;
        this.formIsValid = false;
      }
      if (this.lastname.val === '') {
        this.lastname.IsValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === '') {
        this.description.IsValid = false;
        this.formIsValid = false;
      }
      if (this.rate.val || this.rate.val < 0) {
        this.description.IsValid = false;
        this.formIsValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.IsValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        firstname: this.firstname.val,
        lastname: this.lastname.val,
        description: this.descriptio.val,
        rate: this.rate.val,
        areas: this.areas.val,
      };
      this.$emit('save-data', formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
