require 'sinatra'

class SampleApp < Sinatra::Base

  set :run, true
  set :server, 'webrick'

  get '/' do
    erb :map
  end

  run! if app_file == $0
end