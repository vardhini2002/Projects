<!-- resources/views/layout/sidebar.blade.php -->
<nav id="sidebar">
    <div class="p-4">
        <h1><a href="{{ url('index.html') }}" class="logo">File <span>Management Platform</span></a></h1>
        <ul class="list-unstyled components mb-5">
        @role('superadmin')

            <li class="{{ request()->is('usertabel') ? 'active' : '' }}">
                <a href="{{ route('usertabel') }}"><span class="fa fa-user mr-3"></span>User Management</a>
            </li>
            <li class="{{ request()->is('group-management') ? 'active' : '' }}">
                <a href="{{ route('group-management') }}"><span class="fa fa-users mr-3"></span>Group Management</a>
            </li>
            <li class="{{ request()->is('permission-management') ? 'active' : '' }}">
                <a href="{{ route('permission-management') }}"><span class="fa fa-low-vision mr-3"></span>Permission Management</a>
            </li>
        @endrole
            <li class="{{ request()->is('personal-storage') ? 'active' : '' }}">
                <a href="{{ route('personal-storage') }}"><span class="fa fa-archive mr-3"></span>Personal Storage</a>
            </li>
            <li class="{{ request()->is('shared-storage') ? 'active' : '' }}">
                <a href="{{ route('shared-storage') }}"><span class="fa fa-share-alt-square mr-3"></span>Shared Storage</a>
            </li>
            <li>
                <a href="{{ url('logout') }}"><span class="fa fa-sign-out mr-3"></span>Logout</a>
            </li>
        </ul>
    </div>
</nav>
<script>
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
