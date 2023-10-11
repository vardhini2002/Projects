<div>
    <div class="container-fluid ">
        <div class="table-responsive">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-6">
                            <h2>Shared Storage </b></h2>
                        </div>
                    </div>
                </div>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th class="col-4 ">File Name</th>
                            <th class="col-4 ">Sender Name</th>
                            <th class="col-1 ">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($folder as $folder)
                            <tr>

                                <td>
                                    <i class="material-icons">&#128193;</i>
                                    <a
                                        href="{{ route('file-shared-storage', ['folder_id' => $folder->id]) }}">{{ $folder->folder_name }}</a>

                                </td>
                                <td>
                                    {{$folder->sender_id}}
                                </td>
                                <td>
                                    <a href="" class="download" data-toggle="modal"><i class="fa fa-download" data-toggle="tooltip" title="Download"></i></a>
									<a href="#editFileModal" class="edit" data-toggle="modal"><i class="fa fa-pencil" data-toggle="tooltip" title="Edit"></i></a>

								 </td>
                            </tr>
                        @endforeach


                        @foreach ($files as $file)
                        <tr>

                            <td>
                                <i class="material-icons">&#128196;</i>
                                {{$file->filename}}

                            </td>
                            <td>
                                {{$file->sender_id}}
                            </td>
                            <td>
                                <a href="" class="download" data-toggle="modal"><i class="fa fa-download" data-toggle="tooltip" title="Download"></i></a>
                                <a href="#editFileModal" class="edit" data-toggle="modal"><i class="fa fa-pencil" data-toggle="tooltip" title="Edit"></i></a>

                             </td>
                        </tr>
                    @endforeach


                        {{-- <tr>
									<td>
										<i class="material-icons">&#128196;</i>
										vijay
									</td>
									<td>Vijay</td>
									<td>Viewer</td>
									<td>
										<a href="" class="download" data-toggle="modal"><i class="fa fa-download" data-toggle="tooltip" title="Download"></i></a>
									</td>
									<td>
										<a href="#editFileModal" class="edit" data-toggle="modal"><i class="fa fa-pencil" data-toggle="tooltip" title="Edit"></i></a>
										<a href="#ShareFileModal" class="share" data-toggle="modal"><i class="fa fa-share-alt-square" data-toggle="tooltip" title="share"></i></a>
									</td>
								</tr> --}}
                    </tbody>
                </table>
            </div>
        </div>
    </div>


    <!-- Edit File Modal HTML -->
    <div id="editFileModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form>
                    <div class="modal-header">
                        <h4 class="modal-title">Edit File</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>File Name</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                        <input type="submit" class="btn btn-info  " value="Save Changes">
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Share File Modal HTML -->
    <div id="ShareFileModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form>
                    <div class="modal-header">
                        <h4 class="modal-title">Edit File</h4>
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

</div>
