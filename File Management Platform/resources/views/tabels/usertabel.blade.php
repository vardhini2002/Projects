<div>
			<div class="container-fluid ">
				<div class="table-responsive">
					<div class="table-wrapper">
						<div class="table-title">
							<div class="row">
								<div class="col-sm-6">
									<h2>Manage <b>Users</b></h2>
								</div>
								<div class="col-sm-6">
									<a href="#addUserModal" class="btn btn-success" data-toggle="modal"><i class="fa fa-plus" ></i> <span>Add New User</span></a>
								</div>
							</div>
						</div>
						<table class="table table-striped table-hover">
							<thead>
								<tr>
									<th class="col-5 ">Name</th>
									<th class="col-6 ">Email</th>
									<th class="col-1 ">Actions</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Thomas Hardy</td>
									<td>thomashardy@mail.com</td>
									<td>
										<a href="#editUserModal" class="edit" data-toggle="modal"><i class="fa fa-pencil" data-toggle="tooltip" title="Edit"></i></a>
										<a href="#deleteUserModal" class="delete" data-toggle="modal"><i class="fa fa-trash-o" data-toggle="tooltip" title="Delete"></i></a>
									</td>
								</tr>
								<tr>
									<td>Dominique Perrier</td>
									<td>dominiqueperrier@mail.com</td>
									<td>
										<a href="#editUserModal" class="edit" data-toggle="modal"><i class="fa fa-pencil" data-toggle="tooltip" title="Edit"></i></a>
										<a href="#deleteUserModal" class="delete" data-toggle="modal"><i class="fa fa-trash-o" data-toggle="tooltip" title="Delete"></i></a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<!-- Add Modal HTML -->
			<div id="addUserModal" class="modal fade">
				<div class="modal-dialog">
					<div class="modal-content">
						<form id="Adduser" action="{{route('user.add')}}" method="POST">
							<div class="modal-header">
								<h4 class="modal-title">Add User</h4>
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
			<div id="editUserModal" class="modal fade">
				<div class="modal-dialog">
					<div class="modal-content">
						<form>
							<div class="modal-header">
								<h4 class="modal-title">Edit User</h4>
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
			<div id="deleteUserModal" class="modal fade">
				<div class="modal-dialog">
					<div class="modal-content">
						<form id="deleteuser" action="{{route('user.delete')}}" method="POST">
							<div class="modal-header">
								<h4 class="modal-title">Delete User</h4>
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
