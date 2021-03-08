module EncapsulateStyles
  extend ActiveSupport::Concern
  module ClassMethods
    def component_root_path
      'app/components'
    end

    def component_class
      "#{component_root_path}/#{name.underscore.dasherize}".gsub('/', '--')
    end

    def selector
      ".#{component_class}"
    end

    # Change or disable the tag that the view is automatically wrapped in to scope the associated styles
    def wrapper_tag(tag = nil)
      if tag.nil?
        @wrapper_tag.nil? ? :span : @wrapper_tag
      else
        @wrapper_tag = tag
      end
    end
  end


  def component_class
    self.class.component_class
  end

  def automatic_wrapper_tag(tag, &block)
    content_tag(tag, class: component_class, &block)
  end

  def render_in(view_component, &block)
    if self.class.wrapper_tag
      automatic_wrapper_tag(self.class.wrapper_tag) do
        super
      end
    else
      super
    end
  end
end
