unless Rails.env.test?
  Peek.into Peek::Views::Git, :nwo => 'imjching/labory'
  Peek.into Peek::Views::PerformanceBar
  Peek.into Peek::Views::GC
  Peek.into Peek::Views::Dalli
  Peek.into Peek::Views::PG
  Peek.into Peek::Views::Sidekiq
end
