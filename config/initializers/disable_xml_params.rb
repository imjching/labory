# Be sure to restart your server when you modify this file.

# Protect against injection attacks
# http://www.kb.cert.org/vuls/id/380039
ActionDispatch::ParamsParser::DEFAULT_PARSERS.delete(Mime::XML)
