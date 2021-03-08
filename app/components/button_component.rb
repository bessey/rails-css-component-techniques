class ButtonComponent < ApplicationComponent
  # We don't want a needless wrapper so disable entirely, instead including the class by hand in the view
  wrapper_tag false

  def initialize(action:)
    @action = action
  end
end
