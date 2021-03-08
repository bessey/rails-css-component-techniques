class CardComponent < ApplicationComponent
  wrapper_tag :div

  def initialize(action:)
    @action = action
  end
end
