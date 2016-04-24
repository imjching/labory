# Be sure to restart your server when you modify this file.

Rails.application.configure do
  # Use environment names or environment variables:
  break unless Rails.env.production?
  # break unless ENV['ENABLE_COMPRESSION'] == '1'

  config.middleware.use Rack::Deflater
  config.middleware.insert_before ActionDispatch::Static, Rack::Deflater

  config.middleware.use HtmlCompressor::Rack,
    enabled: true,
    remove_multi_spaces: true,
    remove_comments: true,
    remove_intertag_spaces: false,
    remove_quotes: true, # false?
    compress_css: false,
    compress_javascript: false,
    simple_doctype: false,
    remove_script_attributes: true, # false?
    remove_style_attributes: true, # false?
    remove_link_attributes: true, # false?
    remove_form_attributes: false,
    remove_input_attributes: true, # false?
    remove_javascript_protocol: true, # false?
    remove_http_protocol: false,
    remove_https_protocol: false,
    preserve_line_breaks: false,
    simple_boolean_attributes: true, # false?
    compress_js_templates: false
end