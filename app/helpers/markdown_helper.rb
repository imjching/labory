module MarkdownHelper

  require 'rouge/plugins/redcarpet'

  class Renderer < Redcarpet::Render::HTML
    include Rouge::Plugins::Redcarpet
  end

  def markdown(text)
    render_options = {
      filter_html: true,
      hard_wrap: true,
      link_attributes: { rel: 'nofollow', target: "_blank" }
    }

    extensions = {
      no_intra_emphasis: true,
      tables: true,
      fenced_code_blocks: true,
      autolink: true,
      disable_indented_code_blocks: true,
      strikethrough: true,
      space_after_headers: true,
      superscript: true,
    }

    renderer = Renderer.new(render_options)
    markdown = Redcarpet::Markdown.new(renderer, extensions)

    # content_tag :div, Octokit.markdown(text).html_safe, class: "markdown-body"
    content_tag :div, markdown.render(text).html_safe, class: "markdown-body"
  end
end