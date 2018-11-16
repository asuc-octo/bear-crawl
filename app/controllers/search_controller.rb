class SearchController < ApplicationController
  def index
    puts(params)
    query = params[:query]
    filters = params[:filter]
    category = params[:category]
    
    relations = nil
    
    if query.present?
       relations = Club.search_by(query).records.all
    end
    
    if filters.present?
       filters.each do |filter|
         
         if relations.nil?
           relations = Club.search_by(filter)
         else
           relations.merge(Club.search_by(filter))
         end
         
       end
    end
    
    if category.present?
       puts(category)
    end
    
  end
end
