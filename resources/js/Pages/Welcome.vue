<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="shrink-0 flex items-center">
              <img src="" alt="">
            </div>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <div class="container">
        <Wizard squared-tabs card-background navigable-tabs scrollable-tabs :nextButton="{
          text: 'Avançar',
          icon: 'back',
          hideIcon: false, // default false but selected for sample
          hideText: false, // default false but selected for sample
        }" :custom-tabs="[
          {
            title: 'Dados do Contrato',
          },
          {
            title: 'Dados Pessoais',
          },
          {
            title: 'Transferencias',
          },
          {
            title: 'Assinatura',
          },
        ]" :beforeChange="onTabBeforeChange" @change="onChangeCurrentTab" @complete:wizard="wizardCompleted">
          <b-form @submit="onSubmit">
            <b-card>
              <div v-if="currentTabIndex === 0">
                <b-form-group id="input-group-1" label="E-mail:" label-for="input-1">
                  <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Digite seu melhor e-mail"
                    required>
                  </b-form-input>
                </b-form-group>
                <!-- <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                  <b-form-input id="input-2" v-model="form.name" placeholder="Enter name" required></b-form-input>
                </b-form-group> -->
                <b-form-group id="input-group-3" label="Selecione a empresa:" label-for="input-3">
                  <b-form-select id="input-3" v-model="form.company" :options="companies" required></b-form-select>
                </b-form-group>
              </div>
              <div v-if="currentTabIndex === 1">
                <b-form-group label="Nome Completo:">
                  <b-form-input v-model="form.nome" type="text" placeholder="Digite seu nome completo" required>
                  </b-form-input>
                </b-form-group>
                <b-row>
                  <b-col lg="6">
                    <b-form-group label="RG:">
                      <b-form-input v-model="form.rg" type="text" placeholder="000000000" required>
                      </b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col lg="6">
                    <b-form-group label="CPF:">
                      <b-form-input v-model="form.cpf" type="text" placeholder="000.000.000-00" required>
                      </b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-col lg="6">
                  <b-form-group label="Telefone / Celular:">
                    <b-form-input v-model="form.phone" type="text" placeholder="(00) 0000-0000" required>
                    </b-form-input>
                  </b-form-group>
                </b-col>
                <b-form-group label="CEP:">
                  <b-form-input v-model="form.cep" type="text" placeholder="00.000.000" required>
                  </b-form-input>
                </b-form-group>
                <b-row>
                  <b-col lg="8">
                    <b-form-group label="Endereço:">
                      <b-form-input v-model="form.address" type="text" required>
                      </b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col lg="4">
                    <b-form-group label="Número:">
                      <b-form-input v-model="form.number" type="text" required>
                      </b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <b-form-group label="Bairro:">
                      <b-form-input v-model="form.district" type="text" required>
                      </b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col lg="6">
                    <b-form-group label="Complemento:">
                      <b-form-input v-model="form.complement" type="text" required>
                      </b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <b-form-group label="Cidade:">
                      <b-form-input v-model="form.city" type="text" required>
                      </b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col lg="6">
                    <b-form-group label="Estado:">
                      <b-form-input v-model="form.state" type="text" required>
                      </b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
              </div>
              <div v-if="currentTabIndex === 2">
                <b-card-text>
                  Transferencia Bancária
                </b-card-text>
                <b-row>
                  <b-col lg="6">
                    <b-form-group label="Data:">
                      <b-form-input v-model="form.bankDate" type="date" required>
                      </b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col lg="6">
                    <b-form-group label="Valor:">
                      <b-form-input v-model="form.value" type="number" required>
                      </b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-form-group label="Documentos:">
                  <input type="file">
                </b-form-group>
                <hr>
                <b-card-text>
                  Transferencia Criptoativos
                </b-card-text>
                <b-row>
                  <b-col lg="3">
                    <b-form-group label="Data:">
                      <b-form-input v-model="form.criptoDate" type="date" required>
                      </b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col lg="3">
                    <b-form-group label="Tipo:">
                      <b-form-input v-model="form.type" type="text" required>
                      </b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col lg="3">
                    <b-form-group label="Quantidade:">
                      <b-form-input v-model="form.quantity" type="number" required>
                      </b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col lg="3">
                    <b-form-group label="Hash:">
                      <b-form-input v-model="form.hash" type="number" required>
                      </b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
              </div>
              <div v-if="currentTabIndex === 3">

              </div>
            </b-card>
          </b-form>
        </Wizard>
      </div>
    </main>
  </div>
</template>
<script>
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import { ref } from 'vue';
import 'form-wizard-vue3/dist/form-wizard-vue3.css'
import Wizard from 'form-wizard-vue3'

let step = ref(1)

const setStep = (value) => {
  step.value = value
}

export default {
  name: 'App',
  components: {
    Wizard,
  },
  data() {
    return {
      currentTabIndex: 0,
      form: this.$inertia.form({
        email: '',
        company: '',
        nome: '',
        rg: '',
        cpf: '',
        phone: '',
        cep: '',
        address: '',
        number: '',
        district: '',
        complement: '',
        city: '',
        state: '',
        bankdate: '',
        value: '',
        criptoDate: '',
        type: '',
        quantity: '',
        hash: '',
      }),
      companies: [
        {
          value: 1,
          text: 'Empresa 1'
        },
        {
          value: 2,
          text: 'Empresa 2'
        },
        {
          value: 3,
          text: 'Empresa 3'
        },
      ]
    };
  },
  methods: {
    onChangeCurrentTab(index, oldIndex) {
      console.log(index, oldIndex);
      this.currentTabIndex = index;
    },
    onTabBeforeChange() {
      if (this.currentTabIndex === 0) {
        console.log('First Tab');
      }
      console.log('All Tabs');
    },
    wizardCompleted() {
      this.form.post("/clients");
    },
    onSubmit(){
      console.log('submit');
    }
  },
};

</script>
<style scoped>

</style>
