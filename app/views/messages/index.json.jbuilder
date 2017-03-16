json.array! @messages.each do |message|
	json.id message.id
	json.chat_id message.chat_id
	json.username message.username
	json.text message.text
end