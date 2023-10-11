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

                <div id ="content-container">
                    <div>
                        <div class="container-fluid ">
                            <div class="table-responsive">
                                <div class="table-wrapper">
                                    <div class="table-title">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <h2>Manage <b>User Groups </b></h2>
                                            </div>
                                            <div class="col-sm-6">
                                                <a href="#addUserGroupModal" class="btn btn-success" data-toggle="modal"><i class="fa fa-plus" ></i> <span>Add New UserGroup</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <table class="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th class="col-11 ">Name</th>
                                                <th class="col-1 ">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                @foreach ($groups as $group)
                                                <tr>
                                                    <td>{{ $group->group_name }}</td>
                                                <td>
                                                    <a href="#editUserGroupModal" class="edit" data-toggle="modal"><i class="fa fa-pencil" data-toggle="tooltip" title="Edit"></i></a>
                                                    <a href="#deleteUserGroupModal" class="delete" data-toggle="modal"><i class="fa fa-trash-o" data-toggle="tooltip" title="Delete"></i></a>
                                                </td>
                                            </tr>
                                            @endforeach
                                            {{-- <tr>
                                                <td>Dominique Perrier</td>
                                                <td>
                                                    <a href="#editUserGroupModal" class="edit" data-toggle="modal"><i class="fa fa-pencil" data-toggle="tooltip" title="Edit"></i></a>
                                                    <a href="#deleteUserGroupModal" class="delete" data-toggle="modal"><i class="fa fa-trash-o" data-toggle="tooltip" title="Delete"></i></a>
                                                </td>
                                            </tr> --}}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <!-- Add Modal HTML -->
                        <div id="addUserGroupModal" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <form>
                                        @csrf
                                        <div class="modal-header">
                                            <h4 class="modal-title">Add User Group</h4>
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="form-group">
                                                <label>Name</label>
                                                <input type="text" class="form-control" required>
                                            </div>
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input type="email" class="form-control" required>
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input type="password" class="form-control" required>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                                            <input type="submit" class="btn btn-success" value="Add">
                                        </div>
                                    </form>
                                </div>
                            </div>

                        <!-- Edit Modal HTML -->
                        <div id="editUserGroupModal" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <form>
                                        @csrf
                                        <div class="modal-header">
                                            <h4 class="modal-title">Edit User Group</h4>
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="form-group">
                                                <label>Name</label>
                                                <input type="text" class="form-control" required>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                                            <input type="submit" class="btn btn-info" value="Save">
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <!-- Delete Modal HTML -->
                        <div id="deleteUserGroupModal" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <form>
                                        @csrf
                                        <div class="modal-header">
                                            <h4 class="modal-title">Delete User Group</h4>
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Are you sure you want to delete these Records?</p>
                                            <p class="text-warning"><small>This action cannot be undone.</small></p>
                                        </div>
                                        <div class="modal-footer">
                                            <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                                            <input type="submit" class="btn btn-danger" value="Delete">
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

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
