<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">
        <!-- Include jQuery -->
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

        <!-- Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])

        <!--custom Styles & script -->
        <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/style.css') }}">
        <script src="{{ asset('assets/js/bootstrap.min.js') }}"></script>
        <script src="{{ asset('assets/js/jquery.min.js') }}"></script>
        <script src="{{ asset('assets/js/main.js') }}"></script>
        <script src="{{ asset('assets/js/popper.js') }}"></script>

    </head>
    <body class="font-sans antialiased">
        <div class="">
        <div class="wrapper d-flex align-items-stretch">
            <!-- Sidebar -->
            @include('layouts.sidebar')
            <!-- Page Content -->
            <div id="content" class="p-4 p-md-5 pt-5">
            <main>
                <div id ="content-container">
                        @include('tabels.personalstorage')
                </div>
            </main>
            </div>
        </div>
        </div>
    </body>
</html>


{{-- <script>
    $(document).ready(function () {
        // Function to load content based on the URL
        function loadContent(url) {
            $.ajax({
                url: url,
                method: 'GET',
                success: function (data) {
                    $('#content-container').html(data);
                },
                error: function (xhr, status, error) {
                    console.error('Error loading content:', error);
                }
            });
        }

        // Attach click event handlers to sidebar links
        $('#sidebar a').click(function (e) {
            e.preventDefault(); // Prevent the default link behavior
            var url = $(this).attr('href'); // Get the link's href attribute
            loadContent(url); // Load the content based on the clicked link
        });
    });
</script>
 --}}
