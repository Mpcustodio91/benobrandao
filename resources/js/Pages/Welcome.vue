<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-36">
          <div class="flex">
            <div class="shrink-0 flex items-center">
              <img src="/images/logo.png" alt="" style="max-width: 120px;">
            </div>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <div class="container mt-5">
        <Wizard squared-tabs card-background :navigable-tabs="false" scrollable-tabs :hideButtons="hideButtons"
          :backButton="{
           text: 'Voltar',
           icon: 'next'
          }" 
          :nextButton="{
            text: 'Avançar',
            icon: 'back',
            hideIcon: false, 
            hideText: false, 
          }" 
          :doneButton="{
            text: 'Efetuar Pagamento',
            icon: 'next',
            hideIcon: false, 
            hideText: false,
          }"
          :custom-tabs="[
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
            {
              title: 'Pagamento'
            }
          ]" :beforeChange="onTabBeforeChange" @change="onChangeCurrentTab" @complete:wizard="wizardCompleted">
          <b-form>
            <div v-if="currentTabIndex === 0">
              <b-card>
                <b-form-group id="input-group-1" label="E-mail:" label-for="input-1">
                  <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Digite seu melhor e-mail"
                    :state="validations" required>
                  </b-form-input>
                  <b-form-invalid-feedback id="input-live-feedback">
                    Insira um e-mail válido
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group id="input-group-3" label="Selecione a empresa:" label-for="input-3">
                  <b-form-select id="input-3" v-model="form.company" :options="companies"></b-form-select>
                </b-form-group>
              </b-card>
            </div>
            <div v-if="currentTabIndex === 1">
              <b-card>
                <b-form-group label="Nome Completo:">
                  <b-form-input v-model="form.name" type="text" :state="validations" placeholder="Digite seu nome completo" required>
                  </b-form-input>
                </b-form-group>
                <b-row>
                  <b-col lg="6">
                    <b-form-group label="RG:">
                      <b-form-input v-model="form.rg" type="number" placeholder="000000000" required>
                      </b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col lg="6">
                    <b-form-group label="CPF:">
                      <b-form-input v-model="form.cpf" type="text" v-mask="'###.###.###-##'"
                        placeholder="000.000.000-00" required>
                      </b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-col lg="6">
                  <b-form-group label="Celular:">
                    <b-form-input v-model="form.telefone" type="text" v-mask="'(##) #####-####'"
                      placeholder="(00) 0000-0000" required>
                    </b-form-input>
                  </b-form-group>
                </b-col>
                <b-form-group label="CEP:">
                  <b-form-input v-model="form.zip_code" lazy-formatter type="number" :formatter="consultCep()" required>
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
              </b-card>
            </div>
            <div v-if="currentTabIndex === 2">
              <b-card>
                <div class="mb-4">
                  <b-button variant="success" @click="bank = true">Transferência Bancária?</b-button>
                  <b-button class="ml-2" variant="primary" @click="crypto = true">Transferência Criptoativos?</b-button>
                </div>
                <div v-if="bank">
                  <b-card-text>
                    Transferencia Bancária
                  </b-card-text>
                  <b-row>
                    <b-col lg="6">
                      <b-form-group label="Data:">
                        <b-form-input v-model="this.form.bankDate" :state="validations" type="date" required>
                        </b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col lg="6">
                      <b-form-group label="Valor:">
                        <b-form-input v-model="this.form.value" type="number" required>
                        </b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-form-group label="Documentos:">
                    <!-- <input type="file" ref="fileBank"> -->
                    <input type="file" @input="form.fileBank = $event.target.files[0]" />
                    <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                      {{ form.progress.percentage }}%
                    </progress>
                  </b-form-group>
                  <b-row>
                    <b-col lg="4" class="pb-2">
                      <b-button size="sm" @click="addBank()">Adicionar Transferencia</b-button>
                    </b-col>
                  </b-row>

                  <div class="table-responsive" v-if="form.banks.length > 0">
                    <table width="100%" class="mt-3 table-striped" id="customers">
                      <thead>
                        <tr>
                          <th>Data</th>
                          <th>Valor</th>
                          <th>Arquivo</th>
                          <th>Remover</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="bank, index in form.banks" :key="index">
                          <td>{{ dateFormat(bank.date)}}</td>
                          <td>{{ bank.value }}</td>
                          <td>{{ bank.image }}</td>
                          <td>
                            <b-button size="sm" @click="removeBank(index)">X</b-button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <hr>
                </div>
                <div v-if="crypto">
                  <b-card-text>
                    Transferencia Criptoativos
                  </b-card-text>
                  <b-row>
                    <b-col lg="3">
                      <b-form-group label="Data:">
                        <b-form-input v-model="form.criptoDate" type="date" :state="validations" required>
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
                  <b-row>
                    <b-col lg="4" class="pb-2">
                      <b-button size="sm" @click="addCrypto()">Adicionar Transferencia</b-button>
                    </b-col>
                  </b-row>
                  <div class="table-responsive" v-if="form.cryptos.length > 0">
                    <table width="100%" class="mt-3 table-striped" id="customers">
                      <thead>
                        <tr>
                          <th>Data</th>
                          <th>Tipo</th>
                          <th>Quantidade</th>
                          <th>Hash</th>
                          <th>Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="crypto, index in form.cryptos" :key="index">
                          <td>{{ dateFormat(crypto.date)}}</td>
                          <td>{{ crypto.type }}</td>
                          <td>{{ crypto.quantity }}</td>
                          <td>{{ crypto.hash }}</td>
                          <td>
                            <b-button size="sm" @click="removeCrypto(index)">X</b-button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </b-card>
            </div>
            <div v-if="currentTabIndex === 3">
              <b-card>
                <b-card-text>
                  <h4 class="alert-heading">Procuração</h4>
                </b-card-text>
                <b-alert show variant="success">
                  <p>A procuração, para fins criminais, não necessita de reconhecimento de firma. Esta que está sendo
                    assinada possui registro de IP, de modo que tem validade para atuação nessa esfera</p>
                </b-alert>
                <b-row>
                  <iframe :src="`/pdf/letter-of-attorney/${form.id}/${form.company}`" width="100vh" height="500px"
                    frameborder="0"></iframe>
                </b-row>
              </b-card>
              <br>
              <b-card>
                <b-card-text>
                  <h4 class="alert-heading">Contrato de prestação de serviços</h4>
                </b-card-text>
                <b-alert show variant="success">
                  <p>Este contrato já está assinado com nossa assinatura digital. Para ter plena validade para o
                    senhor(a), basta realizar o download e assinar</p>
                  <p>
                    <a :href="`/pdf/contract/${form.id}/${form.company}/1`" class="btn btn-sm btn-primary">Download</a>
                  </p>
                </b-alert>
                <b-row>
                  <iframe :src="`/pdf/contract/${form.id}/${form.company}/2`" width="100vh" height="500px"
                    frameborder="0"></iframe>
                </b-row>
              </b-card>
            </div>
            <div v-if="currentTabIndex === 4">
              <b-card>
                <b-card-text>
                  <h4 class="alert-heading">Pagamento</h4>
                </b-card-text>
                <b-row>
                  <b-form-group label="Selecione o metodo de pagamento" v-slot="{ ariaDescribedby }">
                    <b-form-radio-group id="radio-group-2" v-model="form.method_payment"
                      :aria-describedby="ariaDescribedby" name="radio-sub-component" @click="paymentMethod">
                      <b-form-radio value="pix">PIX</b-form-radio>
                      <b-form-radio value="credit_card" :state="parcelas">Cartão de Crédito</b-form-radio>
                    </b-form-radio-group>
                  </b-form-group>
                  <div v-if="form.method_payment == 'pix'">
                    <h1>Pix</h1> 
                    <span>Ao clicar em finalizar será gerado um QRCode com o valor de {{this.form.installmentsoptions.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</span>                   
                  </div>
                  <div v-if="form.method_payment == 'credit_card'">
                    <h1>Cartão de Crédito</h1>
                    <b-row>
                      <b-col lg="6">
                        <b-form-group label="Numero de parcelas:">
                          <b-form-select v-model="form.installments" :options="options"></b-form-select>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <div v-if="form.installments">
                      <b-row>
                        <b-col lg="6">
                          <b-form-group label="Nome no Cartão:">
                            <b-form-input v-model="form.holder_name" type="text" required>
                            </b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col lg="6">
                          <b-form-group label="Numero do Cartão:">
                            <b-form-input v-model="form.cardnumber" type="text" v-mask="'####-####-####-####'" required>
                            </b-form-input>
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col lg="4">
                          <b-form-group label="Mês de expiração:">
                            <b-form-input v-model="form.exp_month" type="text" v-mask="'##'" required>
                            </b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col lg="4">
                          <b-form-group label="Ano de expiração: (ex:2022)">
                            <b-form-input v-model="form.exp_year" type="text" v-mask="'####'" required>
                            </b-form-input>
                          </b-form-group>  
                        </b-col>
                        <b-col lg="4">
                          <b-form-group label="CVV:">
                            <b-form-input v-model="this.form.cvv" type="text" v-mask="'###'" required>
                            </b-form-input>
                          </b-form-group>
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                </b-row>
              </b-card>
            </div>
          </b-form>
        </Wizard>
      </div>
    </main>
  </div>
</template>
<script>
import 'form-wizard-vue3/dist/form-wizard-vue3.css'
import Wizard from 'form-wizard-vue3'
import { useForm } from '@inertiajs/inertia-vue3'
import axios from 'axios';
import { reactive } from 'vue';
import moment from 'moment'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'Welcome',
  components: {
    Wizard
  },
  data() {
    return {
      v$: useVuelidate(),
      options: [
        { value: null, text: 'Selecione uma opção' },        
      ],
      currentTabIndex: 0,
      hideButtons: true,
      bank: false,
      crypto: false,
      companies: [],
      step: false,
      banks: useForm({
        date: null,
        value: null,
        image: null
      }),
      form: this.$inertia.form({
        id: '',
        email: '',
        company: null,
        name: '',
        rg: '',
        cpf: '',
        telefone: '',
        zip_code: '',
        address: '',
        number: '',
        district: '',
        complement: '',
        city: '',
        state: '',
        bankDate: null,
        value: '',
        criptoDate: '',
        type: '',
        quantity: '',
        hash: '',
        fileBank: '',
        method_payment:'',
        cardnumber: "",
        holder_name: '',
        exp_month: '',
        exp_year: '',
        cvv:'',
        installments:null,
        installmentsoptions: '',
        ipaddress:'',
        banks: reactive([]),
        cryptos: reactive([]),
      })
    };
  },
  validations() {
    return {
      form: {
        name: { required },
        rg: { required },
        cpf: { required },
        telefone: { required },
        address: { required },
        district: { required },
        city: { required },
        state: { required }        
      },
    }
  },
  methods: {
    onChangeCurrentTab(index, oldIndex) {
      this.currentTabIndex = index;
      if (this.form.email) {
        if (this.step == false) {
          axios.post('/clients/validation', this.form)
            .then((result) => {
              this.form.id = result.data.data              
            }).catch((err) => { });
          this.step = true
        }
      }
      if (this.form.id) {
        axios.patch(`/clients/${this.form.id}`, this.form)
          .then((result) => { })
      }
      if(this.currentTabIndex == 4){
        this.hideButtons = true
        axios.post('/clients/values', this.form)
          .then((result) => {
            let data = result.data.data
            this.form.installmentsoptions = data            
          })        
      }
    },
    onTabBeforeChange() {      
    },
    wizardCompleted() {
      this.form.post('/clients/payment')
    },
    addBank() {
      if (this.form.bankDate && this.form.value) {
        this.form.post(`/clients/bank-save/${this.form.id}`, {
          _method: 'put',
          onSuccess: value => {
            this.form.banks.push({
              date: this.form.bankDate,
              value: this.form.value,
              image: this.form.fileBank.name
            })
            this.form.reset('bankDate', 'value', 'fileBank')
          }
        })
      }
    },
    addCrypto() {
      this.form.post(`/clients/crypto-save/${this.form.id}`, {
        _method: 'put',
        onSuccess: value => {
          this.form.cryptos.push({
            date: this.form.criptoDate,
            type: this.form.type,
            quantity: this.form.quantity,
            hash: this.form.hash,
          })
          this.form.reset('criptoDate', 'type', 'quantity', 'hash')
        }
      })
    },
    consultCep(cep) {
      if (this.form.zip_code.length >= 8) {
        axios.defaults.headers.common = [];
        axios.get(`https://viacep.com.br/ws/${this.form.zip_code}/json/`, {
          headers: {}
        }).then(({ data }) => {
          this.form.address = data.logradouro;
          this.form.district = data.bairro;
          this.form.complement = data.complemento;
          this.form.city = data.localidade;
          this.form.state = data.uf
        })
      }
    },
    removeBank(index) {
      this.form.banks.splice(index, 1);
    },
    dateFormat(value) {
      return moment(value).format('DD/MM/YYYY')
    },
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email)
    },
    paymentMethod() {

    },
  },
  computed: {
    validations() {
      if (this.currentTabIndex == 0 && this.form.email.length > 0) {
        if (!this.validEmail(this.form.email)) {
          return false
        } else {
          this.form.company > 0 ? this.hideButtons = false : this.hideButtons = true
          return true
        }
      }
      if(this.currentTabIndex == 1){
        this.hideButtons = true
        this.v$.$validate()
        if (!this.v$.$error) {
          this.hideButtons = false
        }
      }
      if(this.currentTabIndex == 2){
        this.hideButtons = true
        if(this.form.banks.length > 0 || this.form.cryptos.length > 0){
          this.hideButtons = false
        }
      }
      if(this.form.ipaddress == ''){
        fetch('https://api.ipify.org?format=json')
        .then(x => x.json())
        .then(({ ip }) => {
            this.form.ipaddress = ip
        });
      }
      return null
    },
    parcelas(){
      if(this.form.installmentsoptions && this.options.length <= 3){
        this.options.push({
          value: 1,
          text: `1x ${this.form.installmentsoptions.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
        })
        this.options.push({
          value: 2,
          text: `2x ${(parseInt(this.form.installmentsoptions) / 2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
        })
        this.options.push({
          value: 3,
          text: `3x ${(parseInt(this.form.installmentsoptions) / 3).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
        })
      }
      if(this.form.method_payment == 'pix'){
        this.hideButtons = false
      }
      if(this.form.method_payment == 'credit_card'){
        this.hideButtons = true
        if(this.form.method_payment != '' &&
          this.form.cardnumber != '' &&
          this.form.holder_name != '' &&
          this.form.exp_month != '' &&
          this.form.exp_year != '' &&
          this.form.cvv != '' ){
          this.hideButtons = false
        }       
        
      }
    },
  },
  mounted() {
    this.data.forEach(item => {
      this.companies.push({
        value: item.id,
        text: item.name
      })
    })    
  },
  props: {
    data: Object
  }
};

</script>
<style scoped>
#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}
</style>
