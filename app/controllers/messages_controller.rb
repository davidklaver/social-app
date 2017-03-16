class MessagesController < ApplicationController
	def index
		@messages = Message.all
		render 'index.json.jbuilder'
	end

	def show
		@message = Message.find(params[:id])
		render 'show.json.jbuilder'
	end

	def create
		@message = Message.new(
			chat_id: params[:chat_id],
			username: params[:username],
			text: params[:text]
			)
		if @message.save
			render 'show.json.jbuilder'
		else
			render json: {errors: @message.errors.full_messages}, status: 422
		end
	end
end
