using System;
using Microsoft.AspNetCore.Identity;

namespace Identity.API.Models
{
    public class AppUser : IdentityUser<Guid>
    {
        /// <summary>
        /// Determines if the user is subscribed to the newsletter.
        /// </summary>
        public bool IsSubscribed { get; set; }
    }
}
