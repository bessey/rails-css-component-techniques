class CardComponent < ApplicationComponent
  # Switch from the default :span since we want a block element
  wrapper_tag :div

  def initialize(action:)
    @action = action
  end
end
