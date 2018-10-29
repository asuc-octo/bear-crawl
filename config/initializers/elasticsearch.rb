Elasticsearch::Model.client = Elasticsearch::Client.new log: true
Elasticsearch::Model.client.transport.logger.formatter = proc { |s, d, p, m| "\e[2m#{m}\n\e[0m" }