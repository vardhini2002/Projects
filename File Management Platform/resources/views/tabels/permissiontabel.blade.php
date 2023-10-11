<div>
			<div class="container-fluid ">
				<div class="table-responsive">
					<div class="table-wrapper">
						<div class="table-title">
							<div class="row">
								<div class="col-sm-6">
									<h2>Permission Management </b></h2>
								</div>
							</div>
						</div>
						<table class="table table-striped table-hover">
							<thead>
								<tr>
									<th class="col-3 ">User</th>
									<th class="col-2 ">User Role</th>
									<th class="col-1 ">Actions</th>
								</tr>
							</thead>
							<tbody>
								<tr>
                                    @foreach($user as $user)
                                    <tr>
									<td>
                                        {{$user->name}}
                                    </td>
									<td>{{$user->roles->pluck('name')[0]}}</td>
									@endforeach
									<td>
										<a href="#editPermissionModal" class="edit" data-toggle="modal"><i class="fa fa-pencil" data-toggle="tooltip" title="Edit"></i></a>
										<a href="#deletePermissionModal" class="delete" data-toggle="modal"><i class="fa fa-trash-o" data-toggle="tooltip" title="Delete"></i></a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>


			<!-- Edit Modal HTML -->
			<div id="editPermissionModal" class="modal fade">
				<div class="modal-dialog">
					<div class="modal-content">
						<form>
							<div class="modal-header">
								<h4 class="modal-title">Edit Permission</h4>
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
							</div>
							<div class="modal-body">
								<div class="form-group">
									<label>Owner</label>
									<input type="text" class="form-control" disabled>
								</div>
								<div class="form-group">
									<label>Share To</label>
									<select name="reciver" class="form-control" id="reciver" multiple>
										<option value="john">john</option>
										<option value="vijay">vijay</option>
										<option value="john">kate</option>
										<option value="vijay">mike</option>
									</select>
								</div>
								<div class="form-group">
									<label>File Name</label>
									<input type="text" class="form-control" disabled>
								</div>
								<div class="form-group">
									<label>Permission Role</label>
									<select name="role" class="form-control" id="role">
										<option value="Admin">Admin</option>
										<option value="Viewer">Viewer</option>
									</select>
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
			<div id="deletePermissionModal" class="modal fade">
				<div class="modal-dialog">
					<div class="modal-content">
						<form>
							<div class="modal-header">
								<h4 class="modal-title">Delete Permission</h4>
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
							</div>
							<div class="modal-body">
								<p>Are you sure you want to delete these Permission?</p>
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
