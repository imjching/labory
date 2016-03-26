module MarkdownHelper

  require 'rouge/plugins/redcarpet'


  # Override the default renderer to add syntax highlighting with Pygments.
  class PygmentsHTML < Redcarpet::Render::HTML

    def block_code(code, language)
      Pygments.highlight(code, lexer: language)
    end
  end

  class Renderer < Redcarpet::Render::HTML
    include Rouge::Plugins::Redcarpet
  end


  def markdown(text)
    options = {
      #filter_html:     true,
      #hard_wrap:       true,
      #link_attributes: { rel: 'nofollow', target: "_blank" },
      #space_after_headers: true,
      #fenced_code_blocks: true
    }

    extensions = {
      #autolink:           true,
      #superscript:        true,
      #disable_indented_code_blocks: true
      tables: true,
      fenced_code_blocks: true,
      autolink: true,
      line_numbers: true
    }

    #renderer = Redcarpet::Render::HTML.new(options)
    markdown = Redcarpet::Markdown.new(Renderer, extensions)

    #markdown.render(text).html_safe

    #Octokit.markdown(text).html_safe#, mode: "gfm", context: "octokit/octokit.rb")
    content_tag :div, Octokit.markdown(text).html_safe, class: "markdown-body"
    #content_tag :div, markdown.render(text).html_safe, class: "markdown-body"
  end
end