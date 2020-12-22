using System.Linq;
using Identity.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace Identity.API.Controllers
{
    public class AuthController : ApiControllerBase
    {
        [HttpPost]
        [Route("signin")]
        public IActionResult SignIn(SignInData model)
        {
            var tempUsers = new[] { "a@a.a", "b@b.b", "c@c.c" };

            if (model.Email == "admin" && model.Password == "admin")
            {
                return Ok(true);
            }

            if (tempUsers.Contains(model.Email.ToLower()))
            {
                return Ok(false);
            }

            return Unauthorized();
        }

        [HttpPost]
        [Route("signup")]
        public IActionResult SignUp(SignUpData model)
        {
            return Ok(false);
        }
    }
}
