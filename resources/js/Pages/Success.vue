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
        <b-row>
          <b-card no-body class="overflow-hidden" style="max-width: 640px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img img-width="200" :src="$page.props.message.pix ? $page.props.message.pix : '/images/Check_icon.png'" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Contratação concluida !!">
                  <b-card-text v-if="$page.props.message.pix">
                    Após a confirmação do pagamento o escritório Beno Brandão Advogados entrará em contato com você.
                  </b-card-text>
                  <b-card-text v-if="$page.props.message.success">
                    Em breve o escritório Beno Brandão Advogados entrará em contato com você.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-row>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: 'Success',
  props: {
    data: String
  }
}
</script>