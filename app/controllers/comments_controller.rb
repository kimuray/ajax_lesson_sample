class CommentsController < ActionController::API
  def create
    blog = Blog.find(params[:blog_id])
    comment = blog.comments.create(comment_params)
    render json: comment
  end

  private

  def comment_params
    params.require(:comment).permit(:name, :content)
  end
end
