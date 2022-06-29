<template>
  <section id="contact">
       <section class="contact-form">
      <form name="contact-form" class="eight columns offset-by-two" @submit.prevent="handleSubmit()">
        <input type="hidden" name="form-name" value="contact-form"/>
        <div class="row">
          <input
            v-model="formData.from_name"
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            class="twelve columns"
          />
        </div>
        <input
          v-model="formData.from_email"
          type="email"
          name="from_email"
          placeholder="you@email.com"
          required
          class="twelve columns"
        />
        <input
          v-model="formData.msg_subject"
          type="text"
          name="msg_subject"
          placeholder="Subject"
          required
          class="twelve columns"
        />
        <textarea
          v-model="formData.msg_body"
          name="msg_body"
          placeholder="What are you writing about?"
          required
          class="twelve columns"
        ></textarea>
        <button type="submit" class="twelve columns">Send</button>
      </form>
    </section>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Contact",
  data () {
    return {
      formData: {
        from_name: "",
        from_email: "",
        msg_subject: "",
        msg_body: "",
      }
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit () {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/",
        this.encode({
          "form-name": "contact-form",
          ...this.formData
        }),
        axiosConfig
      ).then(() => {
        this.$router.push('success')
      }).catch(() => {
        this.$router.push('NotFound')
      });
    }
  }
}
</script>

<style scoped>
.contact-form {
  width: 80%;
  margin: 0 auto;
}
input,
textarea {
  display:block;
  width: 100%;
  margin-top: 10px;
  font-size: 18pt;
  padding: 10px;
}
textarea {
  min-height: 150px;
}
.contact-form button {
  font-size: 18pt;
  width: 20%;
  background-color: #666666;
  color: #FFFFFF;
}
.contact-form button:hover {
  background-color: #333333;
}
</style>