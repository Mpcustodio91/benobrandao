<!DOCTYPE html>
<html lang="pt_BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">

    <style>
        @font-face {
            font-family: 'Tangerine';
            font-style: normal;
            font-weight: 400;
            src: url(https://fonts.gstatic.com/s/tangerine/v17/IurY6Y5j_oScZZow4VOxCZZM.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @page {
            margin: 0cm 0cm;
        }

        /** Define now the real margins of every page in the PDF **/
        body {
            margin-top: 3cm;
            margin-left: 2cm;
            margin-right: 2cm;
            margin-bottom: 2cm;
        }

        /** Define the header rules **/
        header {
            position: fixed;
            top: 1cm;
            left: 0cm;
            right: 0cm;
            height: 3cm;
        }

        /** Define the footer rules **/
        footer {
            position: fixed;
            bottom: 1cm;
            left: 0cm;
            right: 0cm;
            height: 2cm;
        }

        .assinatura {
            font-family: 'Tangerine', serif;
            font-size: 48px;
        }
    </style>
    <title>Procuração</title>
</head>

<body>
    <header>
        <div style="text-align: center">
            <img src="data:image/png;base64,{{ base64_encode(file_get_contents(public_path('/images/logo.png'))) }}" style="max-width: 120px;">
        </div>
    </header>
    <p>
        {!!$description!!}
    </p>
    <p>Curitiba, {{\Carbon\Carbon::now()->locale('pt-BR')->translatedFormat('d F Y')}}</p>
    <table style="border-collapse: collapse; width: 100%; margin-top: 150px ">
        <tbody>
            <tr>
                <td style="width: 25%;">&nbsp;</td>
                <td style="width: 50%; text-align: center; border-bottom: 3px solid;" class="assinatura"></td>
                <td style="width: 25%;">&nbsp;</td>
            </tr>
            <tr style="margin-top: 90px">
                <td style="width: 25%;">&nbsp;</td>
                <td style="width: 50%; text-align: center;">{{$data->name}}</td>
                <td style="width: 25%;">&nbsp;</td>
            </tr>
        </tbody>
    </table>
    <footer>        
        <img src="data:image/png;base64,{{ base64_encode(file_get_contents(public_path('/images/footer.png'))) }}" width="100%" height="100%">
    </footer>
</body>

</html>
