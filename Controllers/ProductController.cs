﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class ProductController : Controller
    {
        private INorthwindRepository repository;
        public ProductController(INorthwindRepository repo) => repository = repo;
        public IActionResult Categories() => View(repository.Categories.OrderBy(c => c.categoryName));
    }
}
