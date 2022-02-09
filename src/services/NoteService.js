import $api from "../http";

class NoteService {

    getFolderNotes(userId, folderId) {
        return $api.get(`/users/${userId}/folders/${folderId}/notes`)
            .then((response) => {
                return response.data;
            })
    }
}

export default new NoteService();