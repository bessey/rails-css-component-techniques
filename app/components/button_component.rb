class ButtonComponent < ApplicationComponent
  wrapper_tag false

  def initialize(action:)
    @action = action
  end
end
