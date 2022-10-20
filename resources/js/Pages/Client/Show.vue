<script>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Link } from "@inertiajs/inertia-vue3";
import { defineComponent } from 'vue';
import moment from 'moment'

export default defineComponent({
  components: {
    AppLayout,
    Link
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    dateFormat(value) {
      return moment(value).format('DD/MM/YYYY')
    },
  },
  props: {
    client: Object
  }
})
</script>
<template>
  <AppLayout title="Clientes">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Clientes
      </h2>
    </template>
    <div style="padding: 10px;">
      <Link :href="`/clients`" class="btn btn-sm btn-danger">Voltar</Link>
    </div>    
    <b-row>
      <b-col col="6">
        <b-card :title="client.name">
          <b-card-text style="margin-top: 20px;">
            <b-row>
              <b-col col="6">
                <b>RG:</b>
                {{client.rg}}
              </b-col>
              <b-col col="6">
                <b>CPF:</b>
                {{client.cpf}}
              </b-col>
            </b-row>
          </b-card-text>
          <b-card-text>
            <b-row>
              <b-col col="6">
                <b>E-mail:</b>
                {{client.email}}
              </b-col>
              <b-col col="6">
                <b>Celular:</b>
                {{client.telefone}}
              </b-col>
            </b-row>
          </b-card-text>
          <b-card-text>
            <b-row>
              <b-col col="6">
                <b>CEP:</b>
                {{client.zip_code}}
              </b-col>
            </b-row>
          </b-card-text>
          <b-card-text>
            <b-row>
              <b-col col="8">
                <b>Endereço:</b>
                {{client.address}}
              </b-col>
              <b-col col="4">
                <b>Número:</b>
                {{client.number}}
              </b-col>
            </b-row>
          </b-card-text>
          <b-card-text>
            <b-row>
              <b-col col="6">
                <b>Bairro:</b>
                {{client.district}}
              </b-col>
              <b-col col="4">
                <b>Complemento:</b>
                {{client.complement}}
              </b-col>
            </b-row>
          </b-card-text>
          <b-card-text>
            <b-row>
              <b-col col="6">
                <b>Cidade:</b>
                {{client.city}}
              </b-col>
              <b-col col="4">
                <b>Estado:</b>
                {{client.state}}
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
        <b-row style="margin-top: 20px;" v-if="client.contrato">
          <b-col col="6">
            <b-card title="Contratos" style="margin-bottom: 50px;">
              <b-card-text style="margin-top: 20px;">
                <p>
                  <b>Data da Assinatura:</b> {{dateFormat(client.contrato.created_at)}}
                </p>
                <p>
                  <b>Endereço de IP:</b> {{client.contrato.ipaddress}}
                </p>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col col="6">
        <b-card title="Documentos">
          <b-card-text style="margin-top: 20px;" v-if="client.transf_bank.length > 0">
            <b-card-text>
              Transferencias Bancárias
            </b-card-text>
            <div class="table-responsive">
              <table width="100%" class="mt-3 table-striped" id="customers">
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Valor</th>
                    <th>Arquivo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="bank, index in client.transf_bank" :key="index">
                    <td>{{ dateFormat(bank.date)}}</td>
                    <td>{{ parseInt(bank.value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</td>
                    <td v-if="bank.file">
                      <a :href="`/storage/DocsBanks/${bank.file}`" target="_blank" class="btn btn-sm btn-primary">
                        <i class="fas fa-download"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-card-text>
          <br>
          <hr>
          <br>
          <b-card-text style="margin-top: 20px;" v-if="client.transf_crypto.length > 0">
            <b-card-text>
              Transferencias Criptoativos
            </b-card-text>
            <div class="table-responsive">
              <table width="100%" class="mt-3 table-striped" id="customers">
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Tipo</th>
                    <th>Quantidade</th>
                    <th>Hash</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="bank, index in client.transf_crypto" :key="index">
                    <td>{{ dateFormat(bank.date)}}</td>
                    <td>{{ bank.type }}</td>
                    <td>{{ bank.quantity }}</td>
                    <td>{{ bank.hash }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </AppLayout>
</template>