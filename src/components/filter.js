const Filter = () => {
    return (
        <aside class="col-lg-3 order-lg-first">
            <div class="sidebar sidebar-shop">
                <div class="widget widget-clean">
                    <label>Filters:</label>
                    <a href="#" class="sidebar-filter-clear">Clean All</a>
                </div>

                <div class="widget widget-collapsible">
                    <h3 class="widget-title">
                        <a data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true" aria-controls="widget-1">
                            Category
                        </a>
                    </h3>

                    <div class="collapse show" id="widget-1">
                        <div class="widget-body">
                            <div class="filter-items filter-items-count">
                                <div class="filter-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="cat-1" />
                                        <label class="custom-control-label" for="cat-1">Dresses</label>
                                    </div>
                                    <span class="item-count">3</span>
                                </div>

                                <div class="filter-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="cat-2" />
                                        <label class="custom-control-label" for="cat-2">T-shirts</label>
                                    </div>
                                    <span class="item-count">0</span>
                                </div>

                                <div class="filter-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="cat-3" />
                                        <label class="custom-control-label" for="cat-3">Bags</label>
                                    </div>
                                    <span class="item-count">4</span>
                                </div>

                                <div class="filter-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="cat-4" />
                                        <label class="custom-control-label" for="cat-4">Jackets</label>
                                    </div>
                                    <span class="item-count">2</span>
                                </div>

                                <div class="filter-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="cat-5" />
                                        <label class="custom-control-label" for="cat-5">Shoes</label>
                                    </div>
                                    <span class="item-count">2</span>
                                </div>

                                <div class="filter-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="cat-6" />
                                        <label class="custom-control-label" for="cat-6">Jumpers</label>
                                    </div>
                                    <span class="item-count">1</span>
                                </div>

                                <div class="filter-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="cat-7" />
                                        <label class="custom-control-label" for="cat-7">Jeans</label>
                                    </div>
                                    <span class="item-count">1</span>
                                </div>

                                <div class="filter-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="cat-8" />
                                        <label class="custom-control-label" for="cat-8">Sportwear</label>
                                    </div>
                                    <span class="item-count">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="widget widget-collapsible">
                    <h3 class="widget-title">
                        <a data-toggle="collapse" href="#widget-2" role="button" aria-expanded="true" aria-controls="widget-2">
                            Size
                        </a>
                    </h3>

                    <div class="collapse show" id="widget-2">
                        <div class="widget-body">
                            <div class="filter-items">
                                <div class="filter-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="size-1" />
                                        <label class="custom-control-label" for="size-1">XS</label>
                                    </div>
                                </div>

                                <div class="filter-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="size-2" />
                                        <label class="custom-control-label" for="size-2">S</label>
                                    </div>
                                </div>

                                <div class="filter-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" checked id="size-3" />
                                        <label class="custom-control-label" for="size-3">M</label>
                                    </div>
                                </div>

                                <div class="filter-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" checked id="size-4" />
                                        <label class="custom-control-label" for="size-4">L</label>
                                    </div>
                                </div>

                                <div class="filter-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="size-5" />
                                        <label class="custom-control-label" for="size-5">XL</label>
                                    </div>
                                </div>

                                <div class="filter-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="size-6" />
                                        <label class="custom-control-label" for="size-6">XXL</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="widget widget-collapsible">
                    <h3 class="widget-title">
                        <a data-toggle="collapse" href="#widget-4" role="button" aria-expanded="true" aria-controls="widget-4">
                            Brand
                        </a>
                    </h3>

                    <div class="collapse show" id="widget-4">
                        <div class="widget-body">
                            <div class="filter-items">
                                <div class="filter-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="brand-1" />
                                        <label class="custom-control-label" for="brand-1">Next</label>
                                    </div>
                                </div>

                                <div class="filter-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="brand-2" />
                                        <label class="custom-control-label" for="brand-2">River Island</label>
                                    </div>
                                </div>

                                <div class="filter-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="brand-3" />
                                        <label class="custom-control-label" for="brand-3">Geox</label>
                                    </div>
                                </div>

                                <div class="filter-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="brand-4" />
                                        <label class="custom-control-label" for="brand-4">New Balance</label>
                                    </div>
                                </div>

                                <div class="filter-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="brand-5" />
                                        <label class="custom-control-label" for="brand-5">UGG</label>
                                    </div>
                                </div>

                                <div class="filter-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="brand-6" />
                                        <label class="custom-control-label" for="brand-6">F&F</label>
                                    </div>
                                </div>

                                <div class="filter-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="brand-7" />
                                        <label class="custom-control-label" for="brand-7">Nike</label>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="widget widget-collapsible">
                    <h3 class="widget-title">
                        <a data-toggle="collapse" href="#widget-5" role="button" aria-expanded="true" aria-controls="widget-5">
                            Price
                        </a>
                    </h3>

                    <div class="collapse show" id="widget-5">
                        <div class="widget-body">
                            <div class="filter-price">
                                <div class="filter-price-text">
                                    Price Range:
                                    <span id="filter-price-range"></span>
                                </div>

                                <div id="price-slider"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Filter