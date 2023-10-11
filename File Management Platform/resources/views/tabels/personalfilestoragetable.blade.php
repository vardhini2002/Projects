<div>
    <div class="container-fluid ">
        <div class="table-responsive">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-6">
                            <h2>Personal Storage </b></h2>
                        </div>
                        <div class="col-sm-6">
                            <a href="#createFolderModal" class="btn btn-success" data-toggle="modal"><i
                                    class="fa fa-plus"></i> <span>Create Folder</span></a>
                            <a href="#uploadfileModal" class="btn btn-success " data-toggle="modal"><i
                                    class="fa fa-upload"></i> <span>Upload File</span></a>
                        </div>
                    </div>
                </div>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th class="col-5 ">Name</th>
                            <th class="col-4 ">Date Created</th>
                            <th class="col-1 ">Download</th>
                            <th class="col-2 ">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($files as $file)
                            <tr>

                                <td>
                                    <i class="material-icons">&#128196;</i>
                                    {{ $file->filename }}

                                </td>

                                <td>Created </td>
                                <td><a href="" class="download" data-toggle="modal"><i class="fa fa-download"
                                            data-toggle="tooltip" title="Download"></i></a></td>
                                <td>
                                    <a href="#editFileModal" class="edit" data-toggle="modal"><i class="fa fa-pencil"
                                            data-toggle="tooltip" title="Edit"></i></a>
                                    <a href="#ShareFileModal" class="share" data-toggle="modal"><i
                                            class="fa fa-share-alt-square" data-toggle="tooltip" title="share"></i></a>
                                    <a href="#deleteFileModal" class="delete" data-toggle="modal"><i
                                            class="fa fa-trash-o" data-toggle="tooltip" title="Delete"></i></a>
                                </td>
                            </tr>
                            @endforeach
                            {{-- <tr>
                                <td>

                                    vijay
                                </td>
                                <td>10/10/2020</td>
                                <td><a href="" class="download" data-toggle="modal"><i class="fa fa-download"
                                            data-toggle="tooltip" title="Download"></i></a></td>
                                <td>
                                    <a href="#editFileModal" class="edit" data-toggle="modal"><i class="fa fa-pencil"
                                            data-toggle="tooltip" title="Edit"></i></a>
                                    <a href="#ShareFileModal" class="share" data-toggle="modal"><i
                                            class="fa fa-share-alt-square" data-toggle="tooltip" title="share"></i></a>
                                    <a href="#deleteFileModal" class="delete" data-toggle="modal"><i
                                            class="fa fa-trash-o" data-toggle="tooltip" title="Delete"></i></a>



                                </td>
                            </tr> --}}
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- uploadfile Modal -->
    <div id="uploadfileModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form>
                    <div class="modal-header">
                        <h4 class="modal-title">Upload File</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>File Upload</label>
                            <input type="file" class="form-control">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                        <input type="submit" class="btn btn-success" value="Upload">
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Create Folder Modal -->
    <div id="createFolderModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form>
                    <div class="modal-header">
                        <h4 class="modal-title">Folder Name</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Folder Name</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                        <input type="submit" class="btn btn-success" value="Create">
                    </div>
                </form>
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
                        <button type="button" class="close" data-dismiss="modal"
                            aria-hidden="true">&times;</button>
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
                        <button type="button" class="close" data-dismiss="modal"
                            aria-hidden="true">&times;</button>
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
    <div id="deleteFileModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form>
                    <div class="modal-header">
                        <h4 class="modal-title">Delete Permission</h4>
                        <button type="button" class="close" data-dismiss="modal"
                            aria-hidden="true">&times;</button>
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

