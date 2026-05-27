<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  subject: yup.string().required(),
  email: yup.string().required().email(),
  category: yup.string().required().min(3).max(100),
  description: yup.string().required().min(20),
});

const initialValues = {
  subject: '',
  email: '',
  category: '',
  description: '',
};

const { values, errors, meta, defineField } = useForm({
  validationSchema: schema,
  initialValues,
});

const [subject, subjectAttrs] = defineField('subject');
const [email, emailAttrs] = defineField('email');
const [category, categoryAttrs] = defineField('category');
const [description, descriptionAttrs] = defineField('description');

function onSubmit() {
  console.log('INCIDENCIA:', JSON.stringify(values));
}
</script>

<template>
  <form class="card" @submit.prevent="onSubmit">
    <!-- Assumpte -->
    <label for="subject">Assumpte</label>
    <input
      id="subject"
      type="text"
      v-model="subject"
      v-bind="subjectAttrs"
      :class="{ invalid: !!errors.subject }"
      :aria-invalid="!!errors.subject"
      aria-describedby="subject-error"
      placeholder="(assumpte)"
    />
    <p v-if="errors.subject" id="subject-error" class="error">{{ errors.subject }}</p>

    <!-- Email -->
    <label for="email">Email de contacte</label>
    <input
      id="email"
      type="email"
      v-model="email"
      v-bind="emailAttrs"
      :class="{ invalid: !!errors.email }"
      :aria-invalid="!!errors.email"
      aria-describedby="email-error"
      placeholder="(exemple@email.com)"
    />
    <p v-if="errors.email" id="email-error" class="error">{{ errors.email }}</p>

    <!-- Categoria -->
    <label for="category">Categoria de la incidència</label>
    <input
      id="category"
      type="text"
      v-model="category"
      v-bind="categoryAttrs"
      :class="{ invalid: !!errors.category }"
      :aria-invalid="!!errors.category"
      aria-describedby="category-error"
      placeholder="(categoria)"
    />
    <p v-if="errors.category" id="category-error" class="error">{{ errors.category }}</p>

    <!-- Descripció -->
    <label for="description">Descripció detallada</label>
    <input
      id="description"
      type="text"
      v-model="description"
      v-bind="descriptionAttrs"
      :class="{ invalid: !!errors.description }"
      :aria-invalid="!!errors.description"
      aria-describedby="description-error"
      placeholder="(descriu la incidència...)"
    />
    <p v-if="errors.description" id="description-error" class="error">{{ errors.description }}</p>

    <button class="btn" type="submit" :disabled="!meta.valid">Crear ticket</button>
  </form>
</template>

<style scoped>
.card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 1rem;
  display: grid;
  gap: 0.5rem;
}
.error {
  color: #c00;
  font-size: 0.9rem;
  margin-top: 0.25rem;
}
.invalid {
  outline: 2px solid #e33;
  border-radius: 6px;
}
.btn {
  margin-top: 0.5rem;
}
.btn[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
