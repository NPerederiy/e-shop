using Microsoft.AspNetCore.Mvc;

namespace Web.Shopping.HttpAggregator.Controllers
{
    /// <summary>
    /// A base class for an MVC controller without view support.
    /// </summary>
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class ApiControllerBase : ControllerBase
    {

    }
}
