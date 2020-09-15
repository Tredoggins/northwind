using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Product
    {
        public int productId { get; set; }
        public string productName { get; set; }
        public string quantityPerUnit { get; set; }
        public decimal unitPrice { get; set; }
        public short unitsInStock { get; set; }
        public short unitsOnOrder { get; set; }
        public short reOrderLevel { get; set; }
        public bool discontinued { get; set; }
        public int categoryId { get; set; }
        public Category category { get; set; }
    }
}
