package db

func Notes() map[string]map[string]string {
	notes := make(map[string]map[string]string)

	notes["id1"] = map[string]string{
		"noteId":    "id1",
		"userId":    "user1",
		"content":   "Hello World!",
		"createdAt": "April 3, 10:00 am",
	}
	notes["id2"] = map[string]string{
		"noteId":    "id2",
		"userId":    "user2",
		"content":   "Hello Old World!",
		"createdAt": "April 2, 1:00 pm",
	}

	return notes
}
